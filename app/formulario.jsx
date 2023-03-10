"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Formulario({
  alldistritos,
  alltecnicos,
  allplanes,
  allservicios,
  allrouters,
}) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const reset = () => {
    setValue("dni", "");
    setValue("nombre", "");
    setValue("apellido", "");
    setValue("celular", "");
    setValue("distrito", "");
    setValue("direccion", "");
    setValue("referencia", "");
    setValue("correo", "");
    setValue("tecnico", "");
    setValue("fecha_de_instalacion", "");
    setValue("cintillo", "");
    setValue("plan", "");
    setValue("servicio", "");
    setValue("cajaNap", "");
    setValue("sn", "");
    setValue("router", "");
  };
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const onSubmit = (data) => {
    const cliente = new URLSearchParams(data)
    fetch(`http://localhost:4010/clientes`, {
      method: "POST",
      body: cliente,
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // reset();
    })
  }
  const inputStyle =
    "border border-[#dee2e6] rounded-lg text-gray-700 font-normal px-3 py-2 bg-white focus:border-[#5e72e4] focus:border focus:outline-none w-full";
  return (
    <form
      className="w-[900px] mt-3 grid grid-cols-12 gap-2 md:px-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-span-6">
        <span className="flex justify-between mb-2 items-end">
          <label htmlFor="dni" className="mr-2 text-label">
            DNI
          </label>
          {errors.dni?.type === "required" && (
            <p role="alert" className="text-xs text-danger">
              Este campo es requerido
            </p>
          )}
          {errors.dni?.type === "minLength" && (
            <p role="alert" className="text-xs text-danger">
              El DNI debe tener 8 digitos
            </p>
          )}
          {errors.dni?.type === "maxLength" && (
            <p role="alert" className="text-xs text-danger">
              El DNI debe tener 8 digitos
            </p>
          )}
        </span>
        <input
          type="number"
          id="dni"
          className={inputStyle}
          {...register("dni", { required: true, maxLength: 8, minLength: 8 })}
          aria-invalid={errors.dni ? "true" : "false"}
        />
      </div>
      <div className="col-span-6 flex items-end">
        <button
          className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-info text-xs active:opacity-80 hover:scale-[1.04]"
          onClick={(e) => {
            e.preventDefault();
            let dni = getValues("dni");
            setLoading(true);
            fetch(
              `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFjaHVxdWl2YWxAZ21haWwuY29tIn0.3jDFGJ8-fdJ5Y4_UMgni3mZK_4AKoSEuBAcZbkmBDvQ`,
              { cache: "no-store" }
            )
              .then((response) => response.json())
              .then((data) => {
                setValue("nombre", data.nombres);
                setValue(
                  "apellido",
                  `${data.apellidoPaterno} ${data.apellidoMaterno}`
                );
                setLoading(false);
              });
          }}
        >
          {loading ? "Cargando..." : "Buscar"}
        </button>
      </div>
      <div className="col-span-6">
        <label htmlFor="nombre" className="block text-label mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          {...register("nombre")}
          className={inputStyle}
          required
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="apellido" className="block text-label mb-2">
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          {...register("apellido")}
          className={inputStyle}
          required
        />
      </div>
      <div className="col-span-6">
        <span className="flex justify-between mb-2 items-end">
          <label htmlFor="celular" className="text-label">
            Celular
          </label>
          {errors.celular?.type === "required" && (
            <p role="alert" className="text-xs text-danger">
              Este campo es requerido
            </p>
          )}
          {errors.celular?.type === "minLength" && (
            <p role="alert" className="text-xs text-danger">
              El DNI debe tener 8 digitos
            </p>
          )}
          {errors.celular?.type === "maxLength" && (
            <p role="alert" className="text-xs text-danger">
              El DNI debe tener 8 digitos
            </p>
          )}
        </span>
        <input
          type="telf"
          id="celular"
          {...register("celular", {
            required: true,
            maxLength: 9,
            minLength: 9,
          })}
          aria-invalid={errors.celular ? "true" : "false"}
          className={inputStyle}
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="distrito" className="block text-label mb-2">
          Distrito
        </label>
        <select
          id="distrito"
          {...register("distrito")}
          className={inputStyle}
          required
        >
          <option value="">Seleccione un distrito</option>
          {alldistritos.map((distrito) => (
            <option key={distrito.id} value={distrito.nombre}>
              {distrito.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-12">
        <label htmlFor="direccion" className="block text-label mb-2">
          Direcci??n
        </label>
        <input
          type="text"
          id="direccion"
          {...register("direccion")}
          className={inputStyle}
          required
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="referencia" className="block text-label mb-2">
          Referencia
        </label>
        <input
          type="text"
          id="referencia"
          {...register("referencia")}
          className={inputStyle}
        />
      </div>
      <div className="col-span-6">
        <span className="flex justify-between mb-2 items-end">
          <label htmlFor="correo" className="text-label">
            Email
          </label>
          {errors.correo?.type === "validate" && (
            <p role="alert" className="text-xs text-danger">
              coloque un email valido
            </p>
          )}
        </span>
        <input
          type="email"
          id="correo"
          {...register("correo", { validate: validateEmail })}
          className={inputStyle}
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="tecnico" className="block text-label mb-2">
          Tecnico
        </label>
        <select
          id="tecnico"
          {...register("tecnico")}
          className={inputStyle}
          required
        >
          <option value="">Seleccione un tecnico</option>
          {alltecnicos.map((tecnico) => (
            <option key={tecnico.nombres} value={tecnico.nombres}>
              {tecnico.nombres}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-6">
        <label htmlFor="fecha_de_instalacion" className="block text-label mb-2">
          Fecha
        </label>
        <input
          type="date"
          id="fecha_de_instalacion"
          {...register("fecha_de_instalacion")}
          className={inputStyle}
          required
        />
      </div>
      <div className="col-span-4">
        <label htmlFor="cintillo" className="block text-label mb-2">
          cintillo
        </label>
        <input
          type="number"
          id="cintillo"
          {...register("cintillo")}
          className={inputStyle}
        />
      </div>
      <div className="col-span-4">
        <label htmlFor="plan" className="block text-label mb-2">
          plan
        </label>
        <select id="plan" {...register("plan")} className={inputStyle} required>
          <option value="">Seleccione un plan</option>
          {allplanes.map((plan) => (
            <option key={plan.id} value={plan.plan}>
              {plan.plan}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-4">
        <label htmlFor="servicio" className="block text-label mb-2">
          servicio
        </label>
        <select
          id="servicio"
          {...register("servicio")}
          className={inputStyle}
          required
        >
          <option value="">Seleccione un servicio</option>
          {allservicios.map((servicio) => (
            <option key={servicio.id} value={servicio.servicio}>
              {servicio.servicio}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-4">
        <label htmlFor="cajanap" className="block text-label mb-2">
          caja Nap
        </label>
        <input
          type="text"
          id="cajanap"
          {...register("cajanap")}
          className={inputStyle}
        />
      </div>
      <div className="col-span-4">
        <label htmlFor="sn" className="block text-label mb-2">
          sn
        </label>
        <input
          type="text"
          id="sn"
          {...register("sn")}
          className={inputStyle}
          required
        />
      </div>
      <div className="col-span-4">
        <label htmlFor="router" className="block text-label mb-2">
          router
        </label>
        <select
          id="router"
          {...register("router")}
          className={inputStyle}
          required
        >
          <option value="">Seleccione un router</option>
          {allrouters.map((router) => (
            <option key={router.id} value={router.marca}>
              {router.marca}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-6 mb-4 flex justify-end">
        <button
          type="submit"
          className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-success text-xs active:opacity-80 hover:scale-[1.04]"
        >
          Enviar
        </button>
      </div>
      <div className="col-span-6">
        <button
          name="limpiar"
          className="inline-block px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-warning text-xs active:opacity-80 hover:scale-[1.04]"
          onClick={(e) => {
            e.preventDefault();
            reset();
          }}
        >
          Limpiar
        </button>
      </div>
    </form>
  );
}