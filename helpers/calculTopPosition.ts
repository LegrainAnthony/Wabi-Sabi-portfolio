import { deviceProperties } from "@/types";

export const calculTopPosition = (position: number, deviceSizes: deviceProperties[]): number => {
	const foundDevice = deviceSizes.find((device: deviceProperties) => device.current_device === true);

	if (!foundDevice) {
		return deviceSizes[deviceSizes.length - 1].position + position;
	}

	return foundDevice?.position + position;
};
