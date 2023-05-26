/* 
Greet should render the text hello and if a name is passde it should render
hello followed by the name
*/

import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe('Greet',()=>{
    test('renders SuccessFully',()=>{
        render(<Greet/>)
        const textElement=screen.getByText("Hello")
        expect(textElement).toBeInTheDocument()
    })
    
    test("renders with a name",()=>{
        render(<Greet name="Artemis"/>)
        const textElement=screen.getByText("Hello Artemis")
        expect(textElement).toBeInTheDocument()
    })
})

// Alternatives: it for test;fit for test.only; xit for test.skip 
// Naming Conventions for testing files
/* 
    * file names with suffix test.js or test.tsx
    * file names with suffix spec.js or spec.tsx
    * test files under folder name __tests__
    * eg: greet-test.tsx, greet.test.tsx, greet.spec.tsx
*/