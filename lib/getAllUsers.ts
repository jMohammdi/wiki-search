export default async function getuser() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?_limit=5&_page=1`
  );
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
