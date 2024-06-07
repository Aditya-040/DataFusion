import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button } from "@nextui-org/react";
import { FaLock } from "react-icons/fa";
import {AuthService} from "../login/auth_services";

interface Props {
    history: string;
}

interface State {
    username: string;
    password: string;
    error: string;
}

class LoginPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: "",
        };
    }

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await AuthService.login(this.state.username, this.state.password);
            // this.props.history.push("/home");
        } catch (error) {
            this.setState({ error: error.message });
        }
    };

    render() {
        return (
            <main className="w-full px-9">
                <Modal
                    isOpen={true}
                    closeButton={<a href={'/'}>X</a>}
                >
                    <ModalContent>
                        <ModalHeader className="flex flex-col gap-1 text-black">
                            Login
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={this.handleSubmit}>
                                <div className="flex flex-col gap-2">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        value={this.state.username}
                                        onChange={(event) => this.setState({ username: event.target.value })}
                                        className="w-full p-2 pl-10 text-sm text-gray-700"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        value={this.state.password}
                                        onChange={(event) => this.setState({ password: event.target.value })}
                                        className="w-full p-2 pl-10 text-sm text-gray-700"
                                    />
                                </div>
                                {this.state.error && (
                                    <div className="text-red-500">{this.state.error}</div>
                                )}
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant={'bordered'}
                                    className={'flex'}
                                >
                                    <FaLock /> Login
                                </Button>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </main>
        );
    }
}

export default LoginPage;
