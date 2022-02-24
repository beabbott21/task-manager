export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3001/people`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

function People({ data }: { data: any }) {
  console.log(data);
  return <div>people</div>;
}

export default People;
