import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { User } from '../../interfaces/User';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container, Figure } from 'react-bootstrap';
import logo from '../../assets/imgs/monopol_logo.svg'
import { ButtonWall, DinamicTitle } from '../../components';
import './loginScreen.scss'

const LoginScreen = () => {

    const { login } = useAuth();

    const [formData, setFormData] = useState<User>({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
    });

    const [validated, setValidated] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            login(formData);
        }

        setValidated(true);
    };

    const handleClick = () => {
        handleSubmit({} as React.FormEvent<HTMLFormElement>);
    }

    return (
        <Container fluid>
            <Row>
                <div className="bg-image">
                    <div className='flex-column'>
                        <div className='cont-title'>
                            <DinamicTitle />
                            <span>todos tus ambientes con Monopol Pinturas</span>
                        </div>

                        <div className='d-flex flex-column mt-4'>
                            <span className='text mb-3'>Pódes acceder a todos nuestros productos aquí</span>
                            <ButtonWall
                                color="primary"
                                type="normal"
                                size="medium"
                                text="Ir a comprar"
                                typeButtonForm='submit'
                                href='https://www.pinturasmonopol.com/' clickHandler={function (): void {
                                    throw new Error('Function not implemented.');
                                }} />
                        </div>
                    </div>

                    <Col xs={12} md={5} className="text-center p-4">
                        <div className='cont-card'>
                            <Card className='card-form'>
                                <Figure>
                                    <img src={logo} alt="Monopol Logo" />
                                </Figure>
                                <Card.Body>
                                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                        <Form.Group className='mb-4 mt-4' controlId="validationNombre">
                                            <Form.Control
                                                type="text"
                                                size="lg"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleChange}
                                                placeholder="Nombre"
                                                minLength={3}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Ingrese un nombre válido (mínimo 3 caracteres).
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className='mb-4 mt-4' controlId="validationApellido">
                                            <Form.Control
                                                type="text"
                                                size="lg"
                                                name="apellido"
                                                value={formData.apellido}
                                                onChange={handleChange}
                                                placeholder="Apellido"
                                                minLength={3}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Ingrese un apellido válido (mínimo 3 caracteres).
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className='mb-4 mt-4' controlId="validationEmail">
                                            <Form.Control
                                                type="email"
                                                size="lg"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email"
                                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Ingrese un correo electrónico válido.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className='mb-4 mt-4' controlId="validationTelefono">
                                            <Form.Control
                                                type="text"
                                                size="lg"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                placeholder="Teléfono"
                                                pattern="[0-9]{10}"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Ingrese un teléfono válido (10 dígitos).
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <div className="d-grid gap-2">
                                            <ButtonWall
                                                color="secondary"
                                                type="outline"
                                                size="large"
                                                text="Personalizar ambientes"
                                                typeButtonForm='submit'
                                                clickHandler={handleClick}
                                            />
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </div>
            </Row>
        </Container>
    )
}

export default LoginScreen