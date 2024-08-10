import ThemeSwitch from "@/components/ThemeSwitch";

function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button className="btn btn-primary">button</button>
            <ThemeSwitch/>
        </main>
    );
}

export default Home;
