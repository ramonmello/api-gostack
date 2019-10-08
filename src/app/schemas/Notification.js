import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      requered: true,
    },
    user: {
      type: Number,
      requered: true,
    },
    read: {
      type: Boolean,
      requered: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Notification', NotificationSchema);
