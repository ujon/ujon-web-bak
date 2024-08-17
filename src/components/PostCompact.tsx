export interface PostCompactProps {
    title: string,
    tags: string[],
    group?: string
}

function PostCompact({title, tags, group}: PostCompactProps) {
    return (
        <div className="collapse collapse-arrow">
            <input type="checkbox" name={group}/>
            <div className="collapse-title text-xl font-medium">{title}</div>
            <div className="collapse-content">
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-x-2.5 gap-y-1">
                        {tags.map((tag, index) => (
                            <div key={index} className="badge badge-neutral rounded-none">
                                {tag}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default PostCompact;