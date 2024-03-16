function InputField(props) {
    return(
        <div > 
    <label for={props.LableFor}>{props.LableText}</label>
<input type={props.type}  value={props.value} required onChange={props.onChange}/>
</div>);
}
export default InputField;