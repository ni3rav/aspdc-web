import clientPromise from './mongodb';

export async function fetchLeaderboard() {
  try {
    const client = await clientPromise;
    const db = client.db('test');

    const leaderboard = await db
      .collection('leaderboard')
      .find({})
      .toArray();

    const rankedLeaderboard = leaderboard.map((user, index) => ({
      ...user,
      rank: index + 1,
    }));

    return rankedLeaderboard;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
}
