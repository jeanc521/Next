import Link from "next/link";

interface menuProps {
    op1?: string;
    op2?: string;
    op3?: string;
    op4?: string;
}

export const Menu = ({op1, op2, op3, op4}: menuProps) => {
    return(
        <>
            <header>
                <nav className="flex gap-10 bg-neutral-950 text-white h-[30px]">
                    <Link className="font-black" href={"/"}>{op1}</Link>
                    <Link className="font-black" href={"/hookPage"}>{op2}</Link>
                    <Link className="font-black" href={"/axiosPage"}>{op3}</Link>
                    <Link className="font-black" href={"/severSide"}>{op4}</Link>
                </nav>
            </header>
        </>
    )
}