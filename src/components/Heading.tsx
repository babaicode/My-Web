
type TitleProps = {
         tag?: string,
         text: string
}
const Heading = ({tag, text}: TitleProps) => {
         const CustomTag = tag || 'h1';
         return (
        <CustomTag>{text}</CustomTag>
         )
       }
       export default Heading;