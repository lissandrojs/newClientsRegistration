'use client';


// components/Form.tsx
// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import axios from 'axios';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';

// // Definição do schema de validação usando Zod
// const schema = z.object({
//   name: z.string().min(1, { message: 'Nome é obrigatório' }),
//   email: z.string().email({ message: 'Email inválido' }),
//   phone: z.string().min(10, { message: 'Telefone inválido' }),
//   addressNumber: z.string().min(1, { message: 'Número é obrigatório' }),
//   addressComplement: z.string().optional(),
//   neighborhood: z.string().min(1, { message: 'Bairro é obrigatório' }),
//   cep: z.string().min(8, { message: 'CEP inválido' }).max(8, { message: 'CEP inválido' }),
//   street: z.string().min(1, { message: 'Rua é obrigatória' }),
//   city: z.string().min(1, { message: 'Cidade é obrigatória' }),
//   state: z.string().min(2, { message: 'Estado é obrigatório' }),
//   country: z.string().min(1, { message: 'País é obrigatório' }),
//   birthDate: z.string().min(10, { message: 'Data de nascimento inválida' }),
//   jobTitle: z.string().min(1, { message: 'Cargo é obrigatório' }),
//   company: z.string().min(1, { message: 'Empresa é obrigatória' }),
// });

// type FormData = z.infer<typeof schema>;

// const Form = () => {
//   const { control, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = (data: FormData) => {
//     console.log(data);
//   };

//   const handleCepBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
//     const cep = event.target.value;
//     if (cep.length === 8) {
//       try {
//         const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
//         const { logradouro, localidade, uf, bairro } = response.data;
//         setValue('street', logradouro);
//         setValue('city', localidade);
//         setValue('state', uf);
//         setValue('neighborhood', bairro);
//       } catch (error) {
//         console.error('Erro ao buscar CEP:', error);
//       }
//     }
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="name"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Nome"
//                 fullWidth
//                 error={!!errors.name}
//                 helperText={errors.name ? errors.name.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="email"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Email"
//                 fullWidth
//                 error={!!errors.email}
//                 helperText={errors.email ? errors.email.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="phone"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Telefone"
//                 fullWidth
//                 error={!!errors.phone}
//                 helperText={errors.phone ? errors.phone.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="cep"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="CEP"
//                 fullWidth
//                 error={!!errors.cep}
//                 helperText={errors.cep ? errors.cep.message : ''}
//                 onBlur={handleCepBlur}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="street"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Rua"
//                 fullWidth
//                 error={!!errors.street}
//                 helperText={errors.street ? errors.street.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="addressNumber"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Número"
//                 fullWidth
//                 error={!!errors.addressNumber}
//                 helperText={errors.addressNumber ? errors.addressNumber.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="addressComplement"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Complemento"
//                 fullWidth
//                 error={!!errors.addressComplement}
//                 helperText={errors.addressComplement ? errors.addressComplement.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="neighborhood"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Bairro"
//                 fullWidth
//                 error={!!errors.neighborhood}
//                 helperText={errors.neighborhood ? errors.neighborhood.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="city"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Cidade"
//                 fullWidth
//                 error={!!errors.city}
//                 helperText={errors.city ? errors.city.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="state"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Estado"
//                 fullWidth
//                 error={!!errors.state}
//                 helperText={errors.state ? errors.state.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="country"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="País"
//                 fullWidth
//                 error={!!errors.country}
//                 helperText={errors.country ? errors.country.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="birthDate"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Data de Nascimento"
//                 fullWidth
//                 error={!!errors.birthDate}
//                 helperText={errors.birthDate ? errors.birthDate.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="jobTitle"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Cargo"
//                 fullWidth
//                 error={!!errors.jobTitle}
//                 helperText={errors.jobTitle ? errors.jobTitle.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Controller
//             name="company"
//             control={control}
//             render={({ field }) => (
//               <TextField
//                 {...field}
//                 label="Empresa"
//                 fullWidth
//                 error={!!errors.company}
//                 helperText={errors.company ? errors.company.message : ''}
//               />
//             )}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button type="submit" variant="contained" color="primary">
//             Enviar
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Form;


import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// Definição do schema de validação usando Zod
const schema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(10, { message: 'Telefone inválido' }),
  cpf: z.string().min(11, { message: 'CPF inválido' }),
  addressNumber: z.string().min(1, { message: 'Número é obrigatório' }),
  addressComplement: z.string().optional(),
  neighborhood: z.string().min(1, { message: 'Bairro é obrigatório' }),
  cep: z.string().min(8, { message: 'CEP inválido' }).max(8, { message: 'CEP inválido' }),
  street: z.string().min(1, { message: 'Rua é obrigatória' }),
  city: z.string().min(1, { message: 'Cidade é obrigatória' }),
  state: z.string().min(2, { message: 'Estado é obrigatório' }),
  country: z.string().min(1, { message: 'País é obrigatório' }),
  birthDate: z.string().min(10, { message: 'Data de nascimento inválida' }),
  jobTitle: z.string().min(1, { message: 'Cargo é obrigatório' }),
  company: z.string().min(1, { message: 'Empresa é obrigatória' }),
});

type FormData = z.infer<typeof schema>;

const Form: React.FC = () => {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleCepBlur = async (event: React.FocusEvent<HTMLInputElement>) => {
    const cep = event.target.value;
    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const { logradouro, localidade, uf, bairro } = response.data;
        setValue('street', logradouro);
        setValue('city', localidade);
        setValue('state', uf);
        setValue('neighborhood', bairro);
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
            name="cep"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="CEP"
                fullWidth
                error={!!errors.cep}
                helperText={errors.cep ? errors.cep.message : ''}
                onBlur={handleCepBlur}
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
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="País"
                fullWidth
                error={!!errors.country}
                helperText={errors.country ? errors.country.message : ''}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="birthDate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Data de Nascimento"
                fullWidth
                error={!!errors.birthDate}
                helperText={errors.birthDate ? errors.birthDate.message : ''}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="jobTitle"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Cargo"
                fullWidth
                error={!!errors.jobTitle}
                helperText={errors.jobTitle ? errors.jobTitle.message : ''}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Empresa"
                fullWidth
                error={!!errors.company}
                helperText={errors.company ? errors.company.message : ''}
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