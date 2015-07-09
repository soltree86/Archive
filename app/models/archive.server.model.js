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
		mediaType: {
			type: String,
			enum: ['vimeo', 'soundcloud'],
			default: 'vimeo'
		},
		thumbnail: {
			type: String,
			default: '',
			trim: true
		},
		mediaInfo: {
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
	thumbnail: {
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