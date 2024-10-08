import mongoose from "mongoose";

export interface Events extends mongoose.Document {
	id: number;
	title: string;
	description: string;
	location: string;
	date: string;
	cta_text: string | null;
	cta_link: string | null;
	image_link: string | null;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const EventSchema = new mongoose.Schema<Events>({
	id: {
		type: Number,
		required: [true, "Please specify the event ID."],
	},
	title: {
		type: String,
		required: [true, "Please provide a title for this event."],
		maxlength: [60, "Title cannot be more than 60 characters"],
	},
	description: {
		type: String,
		required: [true, "Please provide the event description"],
	},
	location: {
		type: String,
		required: [true, "Please specify the event location."],
		maxlength: [40, "Species specified cannot be more than 40 characters"],
	},
	date: {
		type: String,
		required: [true, "Please specify the event date."]
	},
	cta_text: {
		type: String,
		required: false,
	},
	cta_link: {
		type: String,
		required: false,
	},
	image_link: {
		type: String,
		required: false,
	}
});

export default mongoose.models.Event || mongoose.model<Events>("Event", EventSchema);