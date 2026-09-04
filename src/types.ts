export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  priceStartingAt: number;
  highlighted?: boolean;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'emergency';
  categoryLabel: string;
  location: string;
  image: string;
  completionDate: string;
  clientFeedback: string;
  stats: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  serviceReceived: string;
  avatar: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
  description: string;
  features: string[];
  duration: string;
  warranty: string;
}

export interface QuoteBookingForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  serviceId: string;
  acType: 'split' | 'window' | 'cassette' | 'central';
  acCount: number;
  brand: string;
  issue: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes: string;
}

export interface BookingReceipt {
  bookingId: string;
  createdAt: string;
  form: QuoteBookingForm;
  estimatedCost: {
    min: number;
    max: number;
  };
  status: 'Confirmed' | 'Pending Dispatch';
}
