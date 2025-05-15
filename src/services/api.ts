import { Avatar } from '../types';

/**
 * Fetches a list of avatars from the DummyJSON API
 */
export const fetchAvatars = async (): Promise<Avatar[]> => {
  try {
    const response = await fetch('https://dummyjson.com/users?limit=3');
    const data = await response.json();
    
    return data.users.map((user: any) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.image,
      email: user.email
    }));
  } catch (error) {
    console.error('Error fetching avatars:', error);
    return [];
  }
};