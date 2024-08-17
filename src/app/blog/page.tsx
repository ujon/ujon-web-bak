import PostCompact, {PostCompactProps} from "@/components/PostCompact";
import {Fragment} from "react";

function Blog() {

    const dummies: PostCompactProps[] = [
        {title: "What is Lorem Ipsum?", tags: ["java", "kotlin"]},
        {title: "Why do we use it?", tags: ["javascript", "typescript"]},
        {title: "Where does it come from?", tags: ["rust", "golang"]},
        {title: "Where can I get some?", tags: ["kafka", "redis", "graphql", "mongodb", "postgresql"]},
        {title: "Who am I", tags: ["clock", "perfume", "classic", "turtle"]},
        {title: "Who are you", tags: []},
        {title: "I am Groot", tags: []},
        {title: "DuDuDuDu", tags: []},
    ]

    return (
        <Fragment>
            {dummies.map(({title, tags}, index) => (
                <Fragment key={index}>
                    <PostCompact title={title} tags={tags}/>
                    {index < dummies.length - 1 && <div className="divider "/>}
                </Fragment>
            ))}
        </Fragment>
    )
}

export default Blog;