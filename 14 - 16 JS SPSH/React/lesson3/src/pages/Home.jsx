import Button from "../components/Button";

function Home() {
  return (
    <section>
      <Button rang="green" yozu="Olish" bosish={() => alert("Olindi")} />
    </section>
  );
}

export default Home;
