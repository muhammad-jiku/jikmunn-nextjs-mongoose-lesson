import Demo from '@/db/models/Demo';
import databaseConnect from '@/db/utils/databaseConnect';

export default async function addTestHandler(req, res) {
  try {
    await databaseConnect();
    console.log('adding info to database');
    const demoData = await new Demo({ ...req.body }).save();
    console.log('data added to the database!!');
    res.status(200).json({ data: demoData });
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong!',
      error: error.message,
    });
  }
}
