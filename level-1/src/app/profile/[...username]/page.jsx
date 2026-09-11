export default async function DynamicProfilePage({ params }) {
  const { username } = await params.username;
  return <div>Dynamic Profile Page {username}</div>;
}
