'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	MediaSchema = new Schema({
		created: {
			type: Date,
			default: Date.now
		},
		title: {
			type: String,
			default: '',
			trim: true,
			required: 'Title cannot be blank'
		},
		thumbnailUrl: {
			type: String,
			default: '',
			trim: true
		},
		videoUrl: {
			type: String,
			default: '',
			trim: true
		},
		documentUrl: {
			type: String,
			default: '',
			trim: true
		}
	});

mongoose.model('Media', MediaSchema);
/**
 * Archive Schema
 */
var ArchiveSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	thumbnailUrl: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	media:[MediaSchema]
});

mongoose.model('Archive', ArchiveSchema);