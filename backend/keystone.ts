import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import {
	withItemData,
	statelessSessions,
} from "@keystone-next/keystone/session";
import { Product } from "./schemas/Product";
import { User } from "./schemas/User";
import { ProductImage } from "./schemas/ProductImage";
import { insertSeedData } from "./seed-data";

const databaseURL = process.env.DATABASE_URL || "mongodb://sound-records";

const sessionConfig = {
	maxAge: 60 * 50 * 24 * 360, // time signed in
	secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
	listKey: "User",
	identityField: "email", // what do users log in with
	secretField: "password",
	initFirstItem: {
		fields: ["name", "email", "password"],
		// todo add in initial roles
	},
});

// config the server
export default withAuth(
	config({
		server: {
			cors: {
				origin: [process.env.FRONTEND_URL],
				credentials: true,
			},
		},
		db: {
			adapter: "mongoose",
			url: databaseURL,
			async onConnect(keystone) {
				console.log("connected to db");
				if (process.argv.includes("--seed-data")) {
					await insertSeedData(keystone);
				}
			},
		},
		lists: createSchema({
			// schema items in here
			User,
			Product,
			ProductImage,
		}),
		ui: {
			// show UI only for people who past the test
			isAccessAllowed: ({ session }) =>
				//	console.log(session);
				!!session?.data,
		},
		session: withItemData(statelessSessions(sessionConfig), {
			// GraphQL Query
			User: "id email",
		}),
	})
);
