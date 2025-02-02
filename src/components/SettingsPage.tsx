import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { LockIcon, EyeIcon, InfoIcon } from "lucide-react";


const SettingsPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 font-aclonica" >Settings</h2>

            <div className="space-y-5">
              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm font-medium">Legal name</label>
                  <Button variant="ghost" className="text-blue-600 h-8">
                    Edit
                  </Button>
                </div>
                <p className="text-gray-600">Peter Griffin</p>
              </div>

              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm font-medium">Email address</label>
                  <Button variant="ghost" className="text-blue-600 h-8">
                    Edit
                  </Button>
                </div>
                <p className="text-gray-600">h****@designdrops.op</p>
              </div>

              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm font-medium">Phone numbers</label>
                  <Button variant="ghost" className="text-blue-600 h-8">
                    Add
                  </Button>
                </div>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
              </div>

              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm font-medium">Government ID</label>
                  <Button variant="ghost" className="text-blue-600 h-8">
                    Add
                  </Button>
                </div>
                <p className="text-gray-600">Not provided</p>
              </div>

              <div className="border-b pb-4">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm font-medium">Address</label>
                  <Button variant="ghost" className="text-blue-600 h-8">
                    Edit
                  </Button>
                </div>
                <p className="text-gray-600">Not provided</p>
              </div>

              <div className="pb-3">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm font-medium">Emergency contact</label>
                  <Button variant="ghost" className="text-blue-600 h-8">
                    Add
                  </Button>
                </div>
                <p className="text-gray-600">Not provided</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4 ">
          <Card className="p-4">
            <div className="flex gap-3 flex-col">
              <LockIcon className="text-red-400 h-14 w-14" />
              <div>
                <h3 className="font-semibold mb-1">Lorem ipsum dolor sit amet.</h3>
                <p className="text-sm text-gray-500">We're hiding some account details to protect your identity.</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex gap-3 flex-col">
              <InfoIcon className="text-red-400 h-14 w-14" />
              <div>
                <h3 className="font-semibold mb-1">Which details can be edited?</h3>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, amet.</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex gap-3 flex-col">
              <EyeIcon className="text-red-400 h-14 w-14" />
              <div>
                <h3 className="font-semibold mb-1">What info is shared with others?</h3>
                <p className="text-sm text-gray-500">Contact information is only released after a reservation is confirmed.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;