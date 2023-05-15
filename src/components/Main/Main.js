import "./Main.scss";

const Main = () => (
    <main className="main">
        <form className="main__form">
            <label className="main__name-label" htmlFor="name">Name<input id="name" type="text" name="name" /></label>
            <button>Add name</button>
        </form>
    </main>
);

export default Main;