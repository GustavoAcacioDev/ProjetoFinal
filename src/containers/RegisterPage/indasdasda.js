<div className="pai2" >


      <div className="container2" >


        <Form className="formulario2" onSubmit={formik.handleSubmit} >


          <h1 className="titulo2" >Cadastre um Atendente</h1>

          <div className="conjunto1">
            <div style={{ marginRight: '20px' }}>
              
              <Form.Group controlId="name">
                <Form.Control type="text" className="nome" placeholder="Nome" name='nome' value={formik.values.nome} onChange={formik.handleChange} required />
              </Form.Group>
            </div>

            <div>
              
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" className="email2" placeholder="Email" name='email' value={formik.values.email} onChange={formik.handleChange} required />
              </Form.Group>
            </div>
          </div>

          <div className="conjunto2">

            <div style={{ marginRight: '20px' }}>
              
              <Form.Group controlId="password">
                <Form.Control type="password" className="senha2" placeholder="Senha" name='senha' value={formik.values.senha} onChange={formik.handleChange} required />
              </Form.Group>
            </div>

            <div >
              
              <Form.Group controlId="phone">
                <Form.Control type="tel" className="telefone" placeholder="Ttelefone" name='telefone' value={formik.values.telefone} onChange={formik.handleChange} required />
              </Form.Group>
            </div>
          </div>

          <div className="conjunto3">
            <div style={{ marginRight: '20px' }}>
              
              <Form.Group controlId="especificacao">
                <Form.Control type="text" className="especificacao" placeholder="Especificação" name='especializacao' value={formik.values.especializacao} onChange={formik.handleChange} required />
              </Form.Group>
            </div>

            <div>
              
              <Form.Group controlId="cpf">
                <Form.Control className="cpf" type="text" placeholder="CPF" name='cpf' value={formik.values.cpf} onChange={formik.handleChange} required />
              </Form.Group>
            </div>
          </div>

          <div className="conjunto4">
            <div style={{ marginRight: '20px' }}>
              <Form.Group controlId="time">
                <Form.Control className="horaInicio" type="text" placeholder="Informe o horário de início" name='horarioInicio' value={formik.values.horarioInicio} onChange={formik.handleChange} required />
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="cpf">
                <Form.Control className="horaTermino" type="text" placeholder="Informe o horário de Término" name='horarioTermino' value={formik.values.horarioTermino} onChange={formik.handleChange} required />
              </Form.Group>
            </div>
          </div>



          <div className="botao2" >
            <Button className='botao-cadastrar' disabled={!formik.isValid || formik.isSubmitting} type='submit'>Cadastrar</Button>
          </div>

        </Form>
      </div>
    </div>