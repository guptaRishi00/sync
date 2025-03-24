type Props = {
    children: React.ReactNode;
};

export default function GlobalProvider({ children }: Props) {
    return <>{children}</>;
}
