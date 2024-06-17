'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';


const  BASE_URL_API = "http://localhost:3333"
const BASE_API_CEP = "https://brasilapi.com.br/api/cep/v1/"

const schema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.number().min(10, { message: 'Telefone inválido' }),
  cpf: z.number().min(11, { message: 'CPF inválido' }).max(11, { message: 'CPF inválido' }),
  maritalStatus: z.string().min(5, { message: 'Estado Civil e obrigatório' }),
  addressNumber: z.string().min(1, { message: 'Número é obrigatório' }),
  addressComplement: z.string().optional(),
  neighborhood: z.string().min(1, { message: 'Bairro é obrigatório' }),
  cep: z.number().min(8, { message: 'CEP inválido' }).max(8, { message: 'CEP inválido' }),
  street: z.string().min(1, { message: 'Rua é obrigatória' }),
  city: z.string().min(1, { message: 'Cidade é obrigatória' }),
  state: z.string().min(2, { message: 'Estado é obrigatório' })
});

type FormData = z.infer<typeof schema>;

const Form: React.FC = () => {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });


  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(BASE_URL_API, data);
  
      if (response.status === 200) {
        toast.success('CEP encontrado com sucesso!');
        console.log(response.data);
      } else {
        toast.error('Erro ao buscar CEP. Tente novamente mais tarde.');
      }
  
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      toast.error('Erro ao buscar CEP. Tente novamente mais tarde.');
    }
  };
  const handleCepBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    const cep = event.target.value;
    if (cep.length === 8) {
      try {
        const response = await axios.get(`${BASE_API_CEP}${cep}`);
        const { street, city, state, neighborhood } = response.data;
        setValue('street', street);
        setValue('city', city);
        setValue('state', state);
        setValue('neighborhood', neighborhood);
      } catch (error) {
        console.error('Erro ao buscar CEP:', error);
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome"
                fullWidth
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="cpf"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="CPF"
                fullWidth
                type="number"
                
                error={!!errors.cpf}
                helperText={errors.cpf ? errors.cpf.message : ''}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Telefone"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ''}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="maritalStatus"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Estado Civil"
                fullWidth
                error={!!errors.maritalStatus}
                helperText={errors.maritalStatus ? errors.maritalStatus.message : ''}
              />
            )}
          />
        </Grid>
    </Grid>
     <Grid marginTop="35px" container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="cep"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="CEP"
                fullWidth
                type="number"
                
                error={!!errors.cep}
                helperText={errors.cep ? errors.cep.message : ''}
                onChange={handleCepBlur}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="street"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Rua"
                fullWidth
                error={!!errors.street}
                helperText={errors.street ? errors.street.message : ''}
                InputLabelProps={{
                    shrink: true,
                  }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="addressNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Número"
                fullWidth
                error={!!errors.addressNumber}
                helperText={errors.addressNumber ? errors.addressNumber.message : ''}
                type="number"
                
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="addressComplement"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Complemento"
                fullWidth
                error={!!errors.addressComplement}
                helperText={errors.addressComplement ? errors.addressComplement.message : ''}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="neighborhood"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Bairro"
                fullWidth
                error={!!errors.neighborhood}
                helperText={errors.neighborhood ? errors.neighborhood.message : ''}
                InputLabelProps={{
                    shrink: true,
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Cidade"
                fullWidth
                error={!!errors.city}
                helperText={errors.city ? errors.city.message : ''}
                InputLabelProps={{
                    shrink: true,
                  }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Estado"
                fullWidth
                error={!!errors.state}
                helperText={errors.state ? errors.state.message : ''}
                InputLabelProps={{
                    shrink: true,
                  }}
              />
            )}
          />
        </Grid>
    </Grid>
        <Box    
            margin={"25px 0"}
            display="flex"
            flexDirection="row-reverse"> 
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </Box>
    </Box>
  );
};

export default Form;