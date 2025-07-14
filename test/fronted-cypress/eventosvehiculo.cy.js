//Implementación de Pruebas Automatizadas para Plataforma de Seguimiento GPS
describe('Verificar en plataforma de seguimiento',()=>{
    //el beforeeach hará que se visite la url del sitio web de seguimiento da vez qwue se ejecue uno de los TC
    beforeEach(()=>{
        //Visitamos la url que nos permitirá hacer seguimiento
        cy.visit('https://demo.traccar.org/login');
        //Escribe el usuario de ingreso a la plataforma
        cy.get('#«r4»').type('awilliam.sanchez@gmail.com');
        //Escribe la contraseña de ingreso a la plataforma
        cy.get('#«r5»').type('123456789*');
        //iniciamos sesión
        cy.get('.muiltr-4148z2-container > .MuiButtonBase-root').click();
    })

    it("ingresar credenciales de acceso",()=>{
        //validamos que la url ingresada contenga los datos correctos
        cy.url().should("include","demo.traccar.org");
    })

    it("Verificar ubicacion actual del dispositivo especificado y analizamos los detalles",()=>{
        //Se debe actualizar el vehiculo a consultar de acuerdo a los que se encuentren registrados en la lista)
        cy.get('.MuiListItemText-primary').contains('BRY137').click();
        cy.get('.MuiTypography-root').contains('Más detalles').click();
  })

    it("Validar reporte de exceso de velocidad de vehículo",()=>{
        cy.get('.MuiButtonBase-root').contains('Reportes').click();
        cy.get('.MuiTypography-root').contains('Eventos').click();
        //Seleccionar el vehiculo - dropdown (Dispositivos)
        cy.get('.MuiSelect-select').eq(0).click({force:true})
        cy.contains('BRY137').scrollIntoView().click();
        //Seleccionar el periodo a validar - dropdown (Periodo)
        cy.get('.MuiSelect-select').eq(2).click({force:true})
        //Se debe cambiar el periodo del evento de acuerdo a la necesidad Hoy, Ayer, Semana Actual..)
        cy.contains('Hoy').scrollIntoView().click({force:true});
        //Seleccionar el el evento de exceso de velocidad - dropdown (Evento)
        cy.get('.MuiSelect-select').eq(3).click({force:true})
        cy.contains('Excedido el límite de Velocidad').scrollIntoView().click({force:true});
        //Mostrar detalle de eventos por vehículo
        cy.contains('span', 'Mostrar').click({force:true})
  })

    it("Validar reporte de salida de goezona",()=>{
        cy.get('.MuiButtonBase-root').contains('Reportes').click();
        cy.get('.MuiTypography-root').contains('Eventos').click();
        //Seleccionar el vehiculo - dropdown (Dispositivos)
        cy.get('.MuiSelect-select').eq(0).click({force:true})
        cy.contains('BRY137').scrollIntoView().click();
        //Seleccionar el periodo a validar - dropdown (Periodo)
        cy.get('.MuiSelect-select').eq(2).click({force:true})
        //Se debe cambiar el periodo del evento de acuerdo a la necesidad Hoy, Ayer, Semana Actual..)
        cy.contains('Hoy').scrollIntoView().click({force:true});
        //Seleccionar el evento de salida de geozona - dropdown (Evento)
        cy.get('.MuiSelect-select').eq(3).click({force:true})
        cy.contains('Salida de la Geo-Zona').scrollIntoView().click({force:true});
        //Mostrar detalle de eventos por vehículo
        cy.contains('span', 'Mostrar').click({force:true})
  })

      it("Validar reporte de inactividad del vehículo",()=>{
        cy.get('.MuiButtonBase-root').contains('Reportes').click();
        cy.get('.MuiTypography-root').contains('Eventos').click();
        //Seleccionar el vehiculo - dropdown (Dispositivos)
        cy.get('.MuiSelect-select').eq(0).click({force:true})
        cy.contains('BRY137').scrollIntoView().click();
        //Seleccionar el periodo a validar - dropdown (Periodo)
        cy.get('.MuiSelect-select').eq(2).click({force:true})
        //Se debe cambiar el periodo del evento de acuerdo a la necesidad Hoy, Ayer, Semana Actual..)
        cy.contains('Hoy').scrollIntoView().click({force:true});
        //Seleccionar el evento de reporte de inactividad - dropdown (Evento)
        cy.get('.MuiSelect-select').eq(3).click({force:true})
        cy.contains('Dispositivo Inactivo').scrollIntoView().click({force:true});
        //Mostrar detalle de eventos por vehículo
        cy.contains('span', 'Mostrar').click({force:true})
  })

    })
