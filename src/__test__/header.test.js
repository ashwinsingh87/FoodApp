import {render} from "@testing-library/react"
import Header from "../components/Header"
test("Logo is visible or not",()=>{
    const header = render(<Header/>)
})