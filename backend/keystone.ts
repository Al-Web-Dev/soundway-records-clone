import "dotenv/config";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { User } from "./schemas/User";

const databaseURL = process.env.DATABASE_URL || "mongodb://sound-records";

const sessionConfig = {
	maxAge: 60 * 50 * 24 * 360, // time signed on
	secret: process.env.COOKIE_SECRET,
};

export default config({
	server: {
		cors: {
			origin: [process.env.FRONTEND_URL],
			credentials: true,
		},
	},
	db: {
		adapter: "mongoose",
		url: databaseURL,
		// todo add data seeding here
	},
	lists: createSchema({
		// schema items in here
		User,
	}),
	ui: {
		// todo change for roles
		isAccessAllowed: () => true,
	},
	// todo add session values
});
