import React from 'react';
import { Card} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from 'next/image';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  department: string;
  address1: string;
  address2: string;
  country: string;
  socialProfiles: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

const UserProfilePage: React.FC = () => {
  const userProfile: UserProfile = {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "(44) 1234 854 5874",
    department: "Finanace",
    address1: "6391 Elgin St. Celina Delaware 1234",
    address2: "4852 Nova St. California, New York 7434",
    country: "Newyork",
    socialProfiles: {
      facebook: "#",
      twitter: "#",
      instagram: "#"
    }
  };

  return (
    <div className=" max-w-7xl gap-8 ">

      <Card className="bg-CARD  p-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold font-aclonica">Profile review</h2>
          <p className="text-gray-500 text-sm">Review all your provided info</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <Image
                src="/Profile.jpg"
                alt="Profile"
                className="w-14 h-14 rounded-full"
                width={24}
                height={24}
              />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                <p>{userProfile.name}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <p>{userProfile.email}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Department</h3>
              <p>{userProfile.department}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Address 1</h3>
              <p>{userProfile.address1}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Address</h3>
              <p>{userProfile.address2}</p>
            </div>
          </div>

          <div className="space-y-6 justify-end">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Phone</h3>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <p>{userProfile.phone}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Country</h3>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <p>{userProfile.country}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">Social profiles</h3>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-blue-50 hover:bg-blue-100 border-none"
                >
                  <Facebook className="h-4 w-4 text-blue-600" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-sky-50 hover:bg-sky-100 border-none"
                >
                  <Twitter className="h-4 w-4 text-sky-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-pink-50 hover:bg-pink-100 border-none"
                >
                  <Instagram className="h-4 w-4 text-pink-500" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-12 justify-center items-center"> 
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50"
          >
            Edit info
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Save user
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UserProfilePage;