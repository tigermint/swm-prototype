import { Button } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';

export function GoogleButton({ children, onClick }) {

  return <Button style={{ width: "100%" }} onClick={onClick} leftIcon={<GoogleIcon />} color="gray" size='lg' radius={"lg"} variant={"gradient"} gradient={{ from: '#3864FF', to: 'teal', deg: 90 }} children={children} />;
}
