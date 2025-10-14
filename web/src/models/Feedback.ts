import mongoose, { Schema, Document, Model } from 'mongoose';

export type FeedbackType = 'TRAINING' | 'TRAINER' | 'PLATFORM';

export interface IFeedback extends Document {
  training: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  type: FeedbackType;
  rating: number;
  comment?: string;
  contentQuality?: number;
  trainerEffectiveness?: number;
  relevance?: number;
  organizationRating?: number;
  wouldRecommend: boolean;
  suggestions?: string;
  createdAt: Date;
  updatedAt: Date;
}

const FeedbackSchema = new Schema<IFeedback>(
  {
    training: {
      type: Schema.Types.ObjectId,
      ref: 'Training',
      required: [true, 'Training reference is required'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User reference is required'],
    },
    type: {
      type: String,
      enum: ['TRAINING', 'TRAINER', 'PLATFORM'],
      default: 'TRAINING',
      required: true,
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating cannot exceed 5'],
    },
    comment: {
      type: String,
      trim: true,
      maxlength: [1000, 'Comment cannot exceed 1000 characters'],
    },
    contentQuality: {
      type: Number,
      min: 1,
      max: 5,
    },
    trainerEffectiveness: {
      type: Number,
      min: 1,
      max: 5,
    },
    relevance: {
      type: Number,
      min: 1,
      max: 5,
    },
    organizationRating: {
      type: Number,
      min: 1,
      max: 5,
    },
    wouldRecommend: {
      type: Boolean,
      default: false,
    },
    suggestions: {
      type: String,
      trim: true,
      maxlength: [500, 'Suggestions cannot exceed 500 characters'],
    },
  },
  {
    timestamps: true,
  }
);

// Add indexes
FeedbackSchema.index({ training: 1 });
FeedbackSchema.index({ user: 1 });
FeedbackSchema.index({ rating: 1 });

// Prevent model recompilation in development
const Feedback: Model<IFeedback> = mongoose.models.Feedback || mongoose.model<IFeedback>('Feedback', FeedbackSchema);

export default Feedback;
