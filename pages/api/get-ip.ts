import { NextApiRequest, NextApiResponse } from 'next';
import requestIp from "request-ip"
import { store } from '../../store'; // Assuming you have a Redux store set up
import { setIpAddress } from "@/store/features/chat/ip-slice";

export default async function  handler(req: NextApiRequest, res: NextApiResponse) {
  const ipAddress = await requestIp.getClientIp(req);
  if (ipAddress){
      store.dispatch(setIpAddress(ipAddress));
  }
  
}
