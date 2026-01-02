import { Accordion,AccordionContent, AccordionItem,AccordionTrigger } from "@/components/ui/accordion"
function FAQ(){
    const faq = ['How do I place an order with your printing service?', 'What if I don’t have a design ready?',
 'How long does printing take?', 'How do you ensure quality and accuracy?', 'What level of print quality should I expect from your service?', 'What happens if there’s an error or issue with my order?']
    return(
        
        <section id="FAQ" className="flex justify-center section-spacing  space-y-20 px-2">
            <Accordion
            type="single"
            collapsible
            className="w-full  flex flex-col gap-7.5 justify-center "
            defaultValue="">
                {faq.map((item, index) => (
                    <AccordionItem key={index} value={`item ${index}`} className='py-4 px-5 border-none bg-[#F4F4F4] rounded-xl'>
                        <AccordionTrigger className='bg-transparent hover:no-underline'>{item}</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-4 mt-5 flex-start">
                                <p className="text-start">
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p className="text-start">
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>  
                ))}
            </Accordion>
        </section>
        
    )
}
export default FAQ