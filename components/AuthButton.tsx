import * as React from "react";
import { Button, ButtonGroup, ButtonProps } from "@chakra-ui/react";
import { useAccount, useConnect } from "wagmi";
import toast from "react-hot-toast";

interface AuthButtonProps extends ButtonProps {
}

const AuthButton: React.FunctionComponent<AuthButtonProps> = (props) => {
    const [connectQuery, connect] = useConnect();
    const [accountQuery] = useAccount();

    React.useEffect(() => {
        if (connectQuery.error?.name === "ConnectorNotFoundError") {
            toast.error("The Metamask extension is required to sign in <^-^>")
        }
    }, [connectQuery.error]);
    if (!accountQuery.data?.address) {
        return (
            <Button
                {...props}
                onClick={() => {
                    connect(connectQuery.data.connectors[0]);
                }}
                >
                    Sign In
            </Button>);
    }
    // If signed in show button as usual
    return (<Button {...props}>{props.children}</Button>);
}

export default AuthButton;