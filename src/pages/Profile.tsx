function Profile() {
  const email = localStorage.getItem('userEmail');
  return (
    <div>
      <h2>Profile Page</h2>
      <p>Email: {email}</p>
    </div>
  );
}

export default Profile;
