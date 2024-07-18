type LayoutProps = {
    children:React.ReactNode;
}

export default function Layout({children}:LayoutProps){
    return(
        <div>
            <div>navbar</div>
            {children}
            <div>footer</div>
        </div>
    )
}