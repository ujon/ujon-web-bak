import LayoutCenter from "@/components/LayoutCenter";

function Home() {
    // todo: text1 and text2 should be modified.
    const text1 = "Hello World";
    const text2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    return (
        <LayoutCenter>
            <div className="hero flex flex-col justify-center items-start content-h">
                <div className="hero-content text-left">
                    <div className="max-w-screen-md">
                        <h1 className="text-5xl font-bold">{text1}</h1>
                        <p className="py-6">{text2}</p>
                    </div>
                </div>
            </div>
        </LayoutCenter>
    );
}

export default Home;
