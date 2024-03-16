function TextAreaField(props) {
    return(
        <div> 
    <label for={props.LableFor}>{props.LableText}</label>
    <textarea  value={props.value} onChange={props.onChange} required></textarea>
</div>);
}
export default TextAreaField;
