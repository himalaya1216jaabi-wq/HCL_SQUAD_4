const API_BASE_URL = 'http://localhost:5000';

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    const users = await response.json();
    
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    
    if (user) {
      // Store user info in localStorage
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true, user };
    } else {
      return { success: false, message: 'Invalid username or password' };
    }
  } catch (error) {
    return { success: false, message: 'Server error' };
  }
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return getUser() !== null;
};

export const getUserRole = () => {
  const user = getUser();
  return user ? user.role : null;
};

export const getDashboardPath = (user) => {
  if (user.role === 'doctor') {
    return '/doctor-dashboard';
  } else if (user.role === 'patient') {
    return '/patientdashboard';
  }
  return '/';
};
