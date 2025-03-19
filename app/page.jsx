import Feed from "@components/Feed";

const Home = () => (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Share, Explore, and Inspire
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">AI Prompts</span>
        </h1>
        <p className="desc text-center">
            Prompt It is an open-source AI prompting tool designed to inspire creativity, helping you discover, craft, and share powerful prompts
            effortlessly in the modern world! 🚀
        </p>

        <Feed />
    </section>
);

export default Home;
