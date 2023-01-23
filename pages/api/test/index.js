//  internal imports
import Demo from '@/db/models/Demo';
import databaseConnect from '@/db/utils/databaseConnect';

export default async function displayTestHandler(req, res) {
  try {
    await databaseConnect();
    const data = await Demo.find({}).select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    res.status(200).json({
      message: 'All demo test datas are showing!!',
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'something went wrong!',
      error: error.message,
    });
  }
}
