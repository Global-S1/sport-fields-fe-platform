"use client";

import { Link } from "@/i18n/navigation";
import { Box } from "@/shared/components/box/box.component";
import { Logo } from "@/shared/components/logo/logo.component";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { RegisterFormAdmin } from "../components/register/form-admin";
import { RegisterFormCustomer } from "../components/register/form-customer";
import { ERegisterType } from "../enums/register.enum";

export const RegisterPage = () => {
  const t = useTranslations("auth.register");
  const [typeSelected] = useState<ERegisterType>(ERegisterType.CUSTOMER);

  return (
    <Box tag="main" className="max-w-screen min-h-screen">
      <Box
        tag="header"
        className="relative h-16 w-full container mx-auto px-12 flex items-center"
      >
        <Logo />
        <Link href={"/auth"} className="absolute group left-12 top-16">
          <Box className="flex items-center gap-1">
            <MdArrowBack className="group-hover:w-0 duration-200" />
            <span className="font-semibold">{t("back")}</span>
          </Box>
          <Box className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-greenLemon-600 to-blueSport-500 duration-200"></Box>
        </Link>
      </Box>
      {/* <TabsRegisterType
        setTypeSelected={setTypeSelected}
        typeSelected={typeSelected}
      /> */}

      <Box tag="section" className="mt-12 px-8 relative">
        <AnimatePresence mode="wait">
          {typeSelected === ERegisterType.CUSTOMER && (
            <motion.div
              key="customer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <RegisterFormCustomer />
            </motion.div>
          )}

          {typeSelected === ERegisterType.ADMIN && (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <RegisterFormAdmin />
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};
