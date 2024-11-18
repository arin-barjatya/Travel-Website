import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Tour from './models/Tour.js'; 

dotenv.config();

const tours = [
  {
    title: 'Heritage Jaipur Tour',
    city: 'Jaipur',
    address: 'Jaipur, Rajasthan',
    distance: 100,
    photo: 'jaipur.jpg',
    desc: 'Jaipur - Pink City Heritage Tour!',
    price: 200,
    maxGroupSize: 10
  },

  {
    title: 'Royal Udaipur Tour',
    city: 'Udaipur',
    address: 'Udaipur, Rajasthan',
    distance: 500,
    photo: 'udaipur.jpg',
    desc: 'Udaipur - Lake City Royal Tour!',
    price: 200,
    maxGroupSize: 10
  },

  {
    title: 'Marwar Tour',
    city: 'Jodhpur',
    address: 'Jodhpur, Rajasthan',
    distance: 350,
    photo: 'C:\Users\barja\Desktop\MERN-Travel-Booking-main\frontend\public\tour-images\jodhpur.jpg',
    desc: 'Royal Marwar Tour!',
    price: 200,
    maxGroupSize: 10
  },

  {
    title: 'Jaisalmer Desert Safari Tour',
    city: 'Jaisalmer',
    address: 'Jaisalmer, Rajasthan',
    distance: 600,
    photo: 'jaisalmer.jpg',
    desc: 'A wonderful adventure in Thar Desert, Jaisalmer!',
    price: 200,
    maxGroupSize: 10
  },

 
];

mongoose.set('strictQuery', false);

const seedTours = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');
    await Tour.deleteMany(); // Clears the collection
    console.log('Existing tours deleted');

    await Tour.insertMany(tours); // Inserts seed data
    console.log('Tours seeded successfully');
    process.exit();
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedTours();
