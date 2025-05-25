function blockRenderer(block: any, index: number, type: string) {
    switch (type) {
        case "elements.logo":
            return { ...block };
        case "blocks.hero-section":
            return { ...block };
        default:
            return null;
    }
}

export function BlockRenderer(blocks: any, type: string) {
    return blocks.map((block: any, index: number) => blockRenderer(block, index, type));
}
