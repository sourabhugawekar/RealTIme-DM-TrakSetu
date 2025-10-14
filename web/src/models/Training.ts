import mongoose, { Schema, Document, Model } from 'mongoose';

export type TrainingMode = 'ONLINE' | 'OFFLINE' | 'HYBRID';
export type TrainingStatus = 'SCHEDULED' | 'ONGOING' | 'COMPLETED' | 'CANCELLED';

export interface ILocation {
  address: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

export interface ITraining extends Document {
  title: string;
  theme: string;
  description?: string;
  location: ILocation;
  startDate: Date;
  endDate: Date;
  mode: TrainingMode;
  status: TrainingStatus;
  trainer: mongoose.Types.ObjectId;
  institution: string;
  targetAudience?: string;
  maxParticipants?: number;
  currentParticipants: number;
  participants: mongoose.Types.ObjectId[];
  resources?: string[];
  certificate?: boolean;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const LocationSchema = new Schema<ILocation>(
  {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    latitude: { type: Number, required: true, min: -90, max: 90 },
    longitude: { type: Number, required: true, min: -180, max: 180 },
  },
  { _id: false }
);

const TrainingSchema = new Schema<ITraining>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: [5, 'Title must be at least 5 characters'],
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    theme: {
      type: String,
      required: [true, 'Theme is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    location: {
      type: LocationSchema,
      required: [true, 'Location is required'],
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: Date,
      required: [true, 'End date is required'],
    },
    mode: {
      type: String,
      enum: ['ONLINE', 'OFFLINE', 'HYBRID'],
      default: 'OFFLINE',
      required: true,
    },
    status: {
      type: String,
      enum: ['SCHEDULED', 'ONGOING', 'COMPLETED', 'CANCELLED'],
      default: 'SCHEDULED',
      required: true,
    },
    trainer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Trainer is required'],
    },
    institution: {
      type: String,
      required: [true, 'Institution is required'],
      trim: true,
    },
    targetAudience: {
      type: String,
      trim: true,
    },
    maxParticipants: {
      type: Number,
      min: 1,
    },
    currentParticipants: {
      type: Number,
      default: 0,
      min: 0,
    },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    resources: [
      {
        type: String,
      },
    ],
    certificate: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Add indexes for better query performance
TrainingSchema.index({ startDate: 1 });
TrainingSchema.index({ 'location.state': 1 });
TrainingSchema.index({ theme: 1 });
TrainingSchema.index({ status: 1 });

// Prevent model recompilation in development
const Training: Model<ITraining> = mongoose.models.Training || mongoose.model<ITraining>('Training', TrainingSchema);

export default Training;
