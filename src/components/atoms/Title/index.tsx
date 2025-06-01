type HeaderProps = React.HTMLAttributes<HTMLHeadingElement>;

interface TitleProps {
    children?: React.ReactNode;
    level: 1 | 2;
}

const H1 = ({ children, ...rest }: HeaderProps) => (
    <h1 className="text-2xl font-bold mb-6 text-center text-gray-700" {...rest}>{children}</h1>
);

const H2 = ({ children,...rest }: HeaderProps) => (
    <h2 className="text-xl font-semibold mb-4 text-gray-700" {...rest}>{children}</h2>
);

const LevelMap = {
    1: H1,
    2: H2,
}

const Title = ({ children, level }: TitleProps) => {
    const Component = LevelMap[level] || H1;
    return (
        <Component>
            {children}
        </Component>
    )
}

export default Title