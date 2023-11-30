import { Box, Text, Input } from '@chakra-ui/react';

const FormInput = ({
  label,
  placeholder,
  size,
  type,
  onChange,
  value,
  name,
  readOnly,
  accept,
  labelColor,
  inputColor
}) => {
  return (
    <Box>
      <Text
      color={labelColor}
      >{label}</Text>
      <Input
      color={inputColor}
        placeholder={placeholder}
        isDisabled={readOnly}
        readOnly={readOnly}
        name={name}
        onChange={onChange}
        value={value}
        size={size}
        type={type}
        accept={accept}
        borderWidth='1px'
        borderColor='rgba(0,0,0,0.2)'
      />
    </Box>
  );
};


export default FormInput