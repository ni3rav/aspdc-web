import clientPromise from './mongodb';
import {User} from '@/lib/types/User'

export async function fetchLeaderboard() {
  try {
    const client = await clientPromise;
    const db = client.db('test');

    const leaderboard = await db
      .collection('leaderboard')
      .find({})
      .toArray();

    const rankedLeaderboard = leaderboard.map((user, index) => ({
      username: user.username,
      rating: user.rating,
      rank: index + 1,
    }));

    return rankedLeaderboard as User[];
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
}
